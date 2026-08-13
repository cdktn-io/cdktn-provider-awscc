# `dataAwsccRoute53RecoverycontrolRoutingControl` Submodule <a name="`dataAwsccRoute53RecoverycontrolRoutingControl` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoverycontrolRoutingControl <a name="DataAwsccRoute53RecoverycontrolRoutingControl" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoverycontrol_routing_control awscc_route53recoverycontrol_routing_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

dataawsccroute53recoverycontrolroutingcontrol.NewDataAwsccRoute53RecoverycontrolRoutingControl(scope Construct, id *string, config DataAwsccRoute53RecoverycontrolRoutingControlConfig) DataAwsccRoute53RecoverycontrolRoutingControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig">DataAwsccRoute53RecoverycontrolRoutingControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig">DataAwsccRoute53RecoverycontrolRoutingControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

dataawsccroute53recoverycontrolroutingcontrol.DataAwsccRoute53RecoverycontrolRoutingControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

dataawsccroute53recoverycontrolroutingcontrol.DataAwsccRoute53RecoverycontrolRoutingControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

dataawsccroute53recoverycontrolroutingcontrol.DataAwsccRoute53RecoverycontrolRoutingControl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

dataawsccroute53recoverycontrolroutingcontrol.DataAwsccRoute53RecoverycontrolRoutingControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolRoutingControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53RecoverycontrolRoutingControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoverycontrol_routing_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolRoutingControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.controlPanelArn">ControlPanelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.controlPanelArn"></a>

```go
func ControlPanelArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.routingControlArn"></a>

```go
func RoutingControlArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoverycontrolRoutingControlConfig <a name="DataAwsccRoute53RecoverycontrolRoutingControlConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolroutingcontrol"

&dataawsccroute53recoverycontrolroutingcontrol.DataAwsccRoute53RecoverycontrolRoutingControlConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolRoutingControl.DataAwsccRoute53RecoverycontrolRoutingControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoverycontrol_routing_control#id DataAwsccRoute53RecoverycontrolRoutingControl#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



