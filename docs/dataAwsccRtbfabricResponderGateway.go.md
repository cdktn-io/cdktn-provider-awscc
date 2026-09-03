# `dataAwsccRtbfabricResponderGateway` Submodule <a name="`dataAwsccRtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricResponderGateway <a name="DataAwsccRtbfabricResponderGateway" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGateway(scope Construct, id *string, config DataAwsccRtbfabricResponderGatewayConfig) DataAwsccRtbfabricResponderGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig">DataAwsccRtbfabricResponderGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig">DataAwsccRtbfabricResponderGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRtbfabricResponderGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus">CertificateAssociationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint">ExternalInboundEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType">GatewayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig">ListenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration">ManagedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus">ResponderGatewayStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration">TrustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcmCertificateArn`<sup>Required</sup> <a name="AcmCertificateArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn"></a>

```go
func AcmCertificateArn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateAssociationStatus`<sup>Required</sup> <a name="CertificateAssociationStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```go
func CertificateAssociationStatus() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ExternalInboundEndpoint`<sup>Required</sup> <a name="ExternalInboundEndpoint" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```go
func ExternalInboundEndpoint() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType"></a>

```go
func GatewayType() *string
```

- *Type:* *string

---

##### `ListenerConfig`<sup>Required</sup> <a name="ListenerConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig"></a>

```go
func ListenerConfig() DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `ManagedEndpointConfiguration`<sup>Required</sup> <a name="ManagedEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```go
func ManagedEndpointConfiguration() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResponderGatewayStatus`<sup>Required</sup> <a name="ResponderGatewayStatus" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus"></a>

```go
func ResponderGatewayStatus() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags"></a>

```go
func Tags() DataAwsccRtbfabricResponderGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a>

---

##### `TrustStoreConfiguration`<sup>Required</sup> <a name="TrustStoreConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```go
func TrustStoreConfiguration() DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricResponderGatewayConfig <a name="DataAwsccRtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/rtbfabric_responder_gateway#id DataAwsccRtbfabricResponderGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricResponderGatewayListenerConfig <a name="DataAwsccRtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayListenerConfig {

}
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration {

}
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration {

}
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig {

}
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration {

}
```


### DataAwsccRtbfabricResponderGatewayTags <a name="DataAwsccRtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayTags {

}
```


### DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

&dataawsccrtbfabricrespondergateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayListenerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayListenerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">TimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThresholdCount`<sup>Required</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```go
func HealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```go
func StatusCodeMatcher() *string
```

- *Type:* *string

---

##### `TimeoutMs`<sup>Required</sup> <a name="TimeoutMs" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```go
func TimeoutMs() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdCount`<sup>Required</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```go
func UnhealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">AutoScalingGroupNameList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupNameList`<sup>Required</sup> <a name="AutoScalingGroupNameList" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```go
func AutoScalingGroupNameList() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">ClusterApiServerCaCertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">ClusterApiServerEndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">EndpointsResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">EndpointsResourceNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterApiServerCaCertificateChain`<sup>Required</sup> <a name="ClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```go
func ClusterApiServerCaCertificateChain() *string
```

- *Type:* *string

---

##### `ClusterApiServerEndpointUri`<sup>Required</sup> <a name="ClusterApiServerEndpointUri" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```go
func ClusterApiServerEndpointUri() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `EndpointsResourceName`<sup>Required</sup> <a name="EndpointsResourceName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```go
func EndpointsResourceName() *string
```

- *Type:* *string

---

##### `EndpointsResourceNamespace`<sup>Required</sup> <a name="EndpointsResourceNamespace" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```go
func EndpointsResourceNamespace() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">AutoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">EksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupsConfiguration`<sup>Required</sup> <a name="AutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```go
func AutoScalingGroupsConfiguration() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `EksEndpointsConfiguration`<sup>Required</sup> <a name="EksEndpointsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```go
func EksEndpointsConfiguration() DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayTagsList <a name="DataAwsccRtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRtbfabricResponderGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRtbfabricResponderGatewayTagsOutputReference <a name="DataAwsccRtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRtbfabricResponderGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a>

---


### DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrtbfabricrespondergateway"

dataawsccrtbfabricrespondergateway.NewDataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">CertificateAuthorityCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityCertificates`<sup>Required</sup> <a name="CertificateAuthorityCertificates" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```go
func CertificateAuthorityCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a>

---



