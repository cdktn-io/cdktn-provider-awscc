# `dataAwsccIotsitewiseGateway` Submodule <a name="`dataAwsccIotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseGateway <a name="DataAwsccIotsitewiseGateway" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGateway(scope Construct, id *string, config DataAwsccIotsitewiseGatewayConfig) DataAwsccIotsitewiseGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig">DataAwsccIotsitewiseGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig">DataAwsccIotsitewiseGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.DataAwsccIotsitewiseGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.DataAwsccIotsitewiseGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.DataAwsccIotsitewiseGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.DataAwsccIotsitewiseGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotsitewiseGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayCapabilitySummaries">GatewayCapabilitySummaries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList">DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayPlatform">GatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayVersion">GatewayVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList">DataAwsccIotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GatewayCapabilitySummaries`<sup>Required</sup> <a name="GatewayCapabilitySummaries" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```go
func GatewayCapabilitySummaries() DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList">DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `GatewayPlatform`<sup>Required</sup> <a name="GatewayPlatform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayPlatform"></a>

```go
func GatewayPlatform() DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `GatewayVersion`<sup>Required</sup> <a name="GatewayVersion" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayVersion"></a>

```go
func GatewayVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tags"></a>

```go
func Tags() DataAwsccIotsitewiseGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList">DataAwsccIotsitewiseGatewayTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseGatewayConfig <a name="DataAwsccIotsitewiseGatewayConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_gateway#id DataAwsccIotsitewiseGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries {

}
```


### DataAwsccIotsitewiseGatewayGatewayPlatform <a name="DataAwsccIotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayGatewayPlatform {

}
```


### DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2 {

}
```


### DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe <a name="DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe {

}
```


### DataAwsccIotsitewiseGatewayTags <a name="DataAwsccIotsitewiseGatewayTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

&dataawscciotsitewisegateway.DataAwsccIotsitewiseGatewayTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```go
func Get(index *f64) DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">CapabilityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">CapabilityNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries">DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapabilityConfiguration`<sup>Required</sup> <a name="CapabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```go
func CapabilityConfiguration() *string
```

- *Type:* *string

---

##### `CapabilityNamespace`<sup>Required</sup> <a name="CapabilityNamespace" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```go
func CapabilityNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries">DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">CoreDeviceOperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">CoreDeviceThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreDeviceOperatingSystem`<sup>Required</sup> <a name="CoreDeviceOperatingSystem" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```go
func CoreDeviceOperatingSystem() *string
```

- *Type:* *string

---

##### `CoreDeviceThingName`<sup>Required</sup> <a name="CoreDeviceThingName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```go
func CoreDeviceThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayGatewayPlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">GreengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">SiemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform">DataAwsccIotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GreengrassV2`<sup>Required</sup> <a name="GreengrassV2" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```go
func GreengrassV2() DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `SiemensIe`<sup>Required</sup> <a name="SiemensIe" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```go
func SiemensIe() DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseGatewayGatewayPlatform
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform">DataAwsccIotsitewiseGatewayGatewayPlatform</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">IotCoreThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IotCoreThingName`<sup>Required</sup> <a name="IotCoreThingName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```go
func IotCoreThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe</a>

---


### DataAwsccIotsitewiseGatewayTagsList <a name="DataAwsccIotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsitewiseGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotsitewiseGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsitewiseGatewayTagsOutputReference <a name="DataAwsccIotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewisegateway"

dataawscciotsitewisegateway.NewDataAwsccIotsitewiseGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsitewiseGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags">DataAwsccIotsitewiseGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags">DataAwsccIotsitewiseGatewayTags</a>

---



