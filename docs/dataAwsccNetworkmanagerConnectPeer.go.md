# `dataAwsccNetworkmanagerConnectPeer` Submodule <a name="`dataAwsccNetworkmanagerConnectPeer` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerConnectPeer <a name="DataAwsccNetworkmanagerConnectPeer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer awscc_networkmanager_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeer(scope Construct, id *string, config DataAwsccNetworkmanagerConnectPeerConfig) DataAwsccNetworkmanagerConnectPeer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig">DataAwsccNetworkmanagerConnectPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig">DataAwsccNetworkmanagerConnectPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworkmanagerConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworkmanagerConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference">DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference">DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectAttachmentId">ConnectAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectPeerId">ConnectPeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lastModificationErrors">LastModificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.subnetArn">SubnetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList">DataAwsccNetworkmanagerConnectPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BgpOptions`<sup>Required</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.bgpOptions"></a>

```go
func BgpOptions() DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference">DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.configuration"></a>

```go
func Configuration() DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference">DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference</a>

---

##### `ConnectAttachmentId`<sup>Required</sup> <a name="ConnectAttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectAttachmentId"></a>

```go
func ConnectAttachmentId() *string
```

- *Type:* *string

---

##### `ConnectPeerId`<sup>Required</sup> <a name="ConnectPeerId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.connectPeerId"></a>

```go
func ConnectPeerId() *string
```

- *Type:* *string

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.insideCidrBlocks"></a>

```go
func InsideCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.lastModificationErrors"></a>

```go
func LastModificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.subnetArn"></a>

```go
func SubnetArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerConnectPeerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList">DataAwsccNetworkmanagerConnectPeerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerConnectPeerBgpOptions <a name="DataAwsccNetworkmanagerConnectPeerBgpOptions" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

&dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeerBgpOptions {

}
```


### DataAwsccNetworkmanagerConnectPeerConfig <a name="DataAwsccNetworkmanagerConnectPeerConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

&dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_connect_peer#id DataAwsccNetworkmanagerConnectPeer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerConnectPeerConfiguration <a name="DataAwsccNetworkmanagerConnectPeerConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

&dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeerConfiguration {

}
```


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

&dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations {

}
```


### DataAwsccNetworkmanagerConnectPeerTags <a name="DataAwsccNetworkmanagerConnectPeerTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

&dataawsccnetworkmanagerconnectpeer.DataAwsccNetworkmanagerConnectPeerTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions">DataAwsccNetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerConnectPeerBgpOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerBgpOptions">DataAwsccNetworkmanagerConnectPeerBgpOptions</a>

---


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn">CoreNetworkAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `CoreNetworkAsn`<sup>Required</sup> <a name="CoreNetworkAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn"></a>

```go
func CoreNetworkAsn() *f64
```

- *Type:* *f64

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations</a>

---


### DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference <a name="DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations">BgpConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration">DataAwsccNetworkmanagerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpConfigurations`<sup>Required</sup> <a name="BgpConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```go
func BgpConfigurations() DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList">DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```go
func InsideCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerConnectPeerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerConfiguration">DataAwsccNetworkmanagerConnectPeerConfiguration</a>

---


### DataAwsccNetworkmanagerConnectPeerTagsList <a name="DataAwsccNetworkmanagerConnectPeerTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerConnectPeerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerConnectPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerConnectPeerTagsOutputReference <a name="DataAwsccNetworkmanagerConnectPeerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagerconnectpeer"

dataawsccnetworkmanagerconnectpeer.NewDataAwsccNetworkmanagerConnectPeerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerConnectPeerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags">DataAwsccNetworkmanagerConnectPeerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerConnectPeerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerConnectPeer.DataAwsccNetworkmanagerConnectPeerTags">DataAwsccNetworkmanagerConnectPeerTags</a>

---



