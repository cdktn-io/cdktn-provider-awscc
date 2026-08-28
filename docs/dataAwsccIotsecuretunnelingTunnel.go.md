# `dataAwsccIotsecuretunnelingTunnel` Submodule <a name="`dataAwsccIotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsecuretunnelingTunnel <a name="DataAwsccIotsecuretunnelingTunnel" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.NewDataAwsccIotsecuretunnelingTunnel(scope Construct, id *string, config DataAwsccIotsecuretunnelingTunnelConfig) DataAwsccIotsecuretunnelingTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig">DataAwsccIotsecuretunnelingTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig">DataAwsccIotsecuretunnelingTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotsecuretunnelingTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference">DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList">DataAwsccIotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference">DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelArn">TunnelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.destinationConfig"></a>

```go
func DestinationConfig() DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference">DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tags"></a>

```go
func Tags() DataAwsccIotsecuretunnelingTunnelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList">DataAwsccIotsecuretunnelingTunnelTagsList</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.timeoutConfig"></a>

```go
func TimeoutConfig() DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference">DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `TunnelArn`<sup>Required</sup> <a name="TunnelArn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelArn"></a>

```go
func TunnelArn() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsecuretunnelingTunnelConfig <a name="DataAwsccIotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

&dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnelConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsecuretunneling_tunnel#id DataAwsccIotsecuretunnelingTunnel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsecuretunnelingTunnelDestinationConfig <a name="DataAwsccIotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

&dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig {

}
```


### DataAwsccIotsecuretunnelingTunnelTags <a name="DataAwsccIotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

&dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnelTags {

}
```


### DataAwsccIotsecuretunnelingTunnelTimeoutConfig <a name="DataAwsccIotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

&dataawscciotsecuretunnelingtunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference <a name="DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.NewDataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">ThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig">DataAwsccIotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```go
func ThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsecuretunnelingTunnelDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelDestinationConfig">DataAwsccIotsecuretunnelingTunnelDestinationConfig</a>

---


### DataAwsccIotsecuretunnelingTunnelTagsList <a name="DataAwsccIotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.NewDataAwsccIotsecuretunnelingTunnelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsecuretunnelingTunnelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotsecuretunnelingTunnelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsecuretunnelingTunnelTagsOutputReference <a name="DataAwsccIotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.NewDataAwsccIotsecuretunnelingTunnelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsecuretunnelingTunnelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags">DataAwsccIotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsecuretunnelingTunnelTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTags">DataAwsccIotsecuretunnelingTunnelTags</a>

---


### DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecuretunnelingtunnel"

dataawscciotsecuretunnelingtunnel.NewDataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">MaxLifetimeTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig">DataAwsccIotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="MaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```go
func MaxLifetimeTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsecuretunnelingTunnelTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsecuretunnelingTunnel.DataAwsccIotsecuretunnelingTunnelTimeoutConfig">DataAwsccIotsecuretunnelingTunnelTimeoutConfig</a>

---



