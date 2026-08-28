# `dataAwsccEc2TransitGatewayPeeringAttachment` Submodule <a name="`dataAwsccEc2TransitGatewayPeeringAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPeeringAttachment <a name="DataAwsccEc2TransitGatewayPeeringAttachment" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.NewDataAwsccEc2TransitGatewayPeeringAttachment(scope Construct, id *string, config DataAwsccEc2TransitGatewayPeeringAttachmentConfig) DataAwsccEc2TransitGatewayPeeringAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig">DataAwsccEc2TransitGatewayPeeringAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig">DataAwsccEc2TransitGatewayPeeringAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPeeringAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerAccountId">PeerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">PeerTransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference">DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList">DataAwsccEc2TransitGatewayPeeringAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `PeerAccountId`<sup>Required</sup> <a name="PeerAccountId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```go
func PeerAccountId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PeerTransitGatewayId`<sup>Required</sup> <a name="PeerTransitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```go
func PeerTransitGatewayId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.status"></a>

```go
func Status() DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference">DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tags"></a>

```go
func Tags() DataAwsccEc2TransitGatewayPeeringAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList">DataAwsccEc2TransitGatewayPeeringAttachmentTagsList</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPeeringAttachmentConfig <a name="DataAwsccEc2TransitGatewayPeeringAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

&dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsccEc2TransitGatewayPeeringAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPeeringAttachmentStatus <a name="DataAwsccEc2TransitGatewayPeeringAttachmentStatus" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

&dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus {

}
```


### DataAwsccEc2TransitGatewayPeeringAttachmentTags <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

&dataawsccec2transitgatewaypeeringattachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference <a name="DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.NewDataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus">DataAwsccEc2TransitGatewayPeeringAttachmentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2TransitGatewayPeeringAttachmentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus">DataAwsccEc2TransitGatewayPeeringAttachmentStatus</a>

---


### DataAwsccEc2TransitGatewayPeeringAttachmentTagsList <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.NewDataAwsccEc2TransitGatewayPeeringAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2TransitGatewayPeeringAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypeeringattachment"

dataawsccec2transitgatewaypeeringattachment.NewDataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags">DataAwsccEc2TransitGatewayPeeringAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2TransitGatewayPeeringAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags">DataAwsccEc2TransitGatewayPeeringAttachmentTags</a>

---



