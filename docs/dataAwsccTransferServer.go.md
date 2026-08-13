# `dataAwsccTransferServer` Submodule <a name="`dataAwsccTransferServer` Submodule" id="@cdktn/provider-awscc.dataAwsccTransferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTransferServer <a name="DataAwsccTransferServer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server awscc_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServer(scope Construct, id *string, config DataAwsccTransferServerConfig) DataAwsccTransferServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig">DataAwsccTransferServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig">DataAwsccTransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTransferServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.DataAwsccTransferServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.DataAwsccTransferServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.DataAwsccTransferServer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.DataAwsccTransferServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTransferServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTransferServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.as2ServiceManagedEgressIpAddresses">As2ServiceManagedEgressIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference">DataAwsccTransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderDetails">IdentityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference">DataAwsccTransferServerIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderType">IdentityProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.loggingRole">LoggingRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocolDetails">ProtocolDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference">DataAwsccTransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.s3StorageOptions">S3StorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference">DataAwsccTransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.securityPolicyName">SecurityPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.structuredLogDestinations">StructuredLogDestinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList">DataAwsccTransferServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference">DataAwsccTransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `As2ServiceManagedEgressIpAddresses`<sup>Required</sup> <a name="As2ServiceManagedEgressIpAddresses" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.as2ServiceManagedEgressIpAddresses"></a>

```go
func As2ServiceManagedEgressIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointDetails"></a>

```go
func EndpointDetails() DataAwsccTransferServerEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference">DataAwsccTransferServerEndpointDetailsOutputReference</a>

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `IdentityProviderDetails`<sup>Required</sup> <a name="IdentityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderDetails"></a>

```go
func IdentityProviderDetails() DataAwsccTransferServerIdentityProviderDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference">DataAwsccTransferServerIdentityProviderDetailsOutputReference</a>

---

##### `IdentityProviderType`<sup>Required</sup> <a name="IdentityProviderType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.identityProviderType"></a>

```go
func IdentityProviderType() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.loggingRole"></a>

```go
func LoggingRole() *string
```

- *Type:* *string

---

##### `PostAuthenticationLoginBanner`<sup>Required</sup> <a name="PostAuthenticationLoginBanner" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.postAuthenticationLoginBanner"></a>

```go
func PostAuthenticationLoginBanner() *string
```

- *Type:* *string

---

##### `PreAuthenticationLoginBanner`<sup>Required</sup> <a name="PreAuthenticationLoginBanner" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.preAuthenticationLoginBanner"></a>

```go
func PreAuthenticationLoginBanner() *string
```

- *Type:* *string

---

##### `ProtocolDetails`<sup>Required</sup> <a name="ProtocolDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocolDetails"></a>

```go
func ProtocolDetails() DataAwsccTransferServerProtocolDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference">DataAwsccTransferServerProtocolDetailsOutputReference</a>

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `S3StorageOptions`<sup>Required</sup> <a name="S3StorageOptions" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.s3StorageOptions"></a>

```go
func S3StorageOptions() DataAwsccTransferServerS3StorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference">DataAwsccTransferServerS3StorageOptionsOutputReference</a>

---

##### `SecurityPolicyName`<sup>Required</sup> <a name="SecurityPolicyName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.securityPolicyName"></a>

```go
func SecurityPolicyName() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StructuredLogDestinations`<sup>Required</sup> <a name="StructuredLogDestinations" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.structuredLogDestinations"></a>

```go
func StructuredLogDestinations() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tags"></a>

```go
func Tags() DataAwsccTransferServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList">DataAwsccTransferServerTagsList</a>

---

##### `WorkflowDetails`<sup>Required</sup> <a name="WorkflowDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.workflowDetails"></a>

```go
func WorkflowDetails() DataAwsccTransferServerWorkflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference">DataAwsccTransferServerWorkflowDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTransferServerConfig <a name="DataAwsccTransferServerConfig" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/transfer_server#id DataAwsccTransferServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTransferServerEndpointDetails <a name="DataAwsccTransferServerEndpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerEndpointDetails {

}
```


### DataAwsccTransferServerIdentityProviderDetails <a name="DataAwsccTransferServerIdentityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerIdentityProviderDetails {

}
```


### DataAwsccTransferServerProtocolDetails <a name="DataAwsccTransferServerProtocolDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerProtocolDetails {

}
```


### DataAwsccTransferServerS3StorageOptions <a name="DataAwsccTransferServerS3StorageOptions" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerS3StorageOptions {

}
```


### DataAwsccTransferServerTags <a name="DataAwsccTransferServerTags" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerTags {

}
```


### DataAwsccTransferServerWorkflowDetails <a name="DataAwsccTransferServerWorkflowDetails" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerWorkflowDetails {

}
```


### DataAwsccTransferServerWorkflowDetailsOnPartialUpload <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerWorkflowDetailsOnPartialUpload {

}
```


### DataAwsccTransferServerWorkflowDetailsOnUpload <a name="DataAwsccTransferServerWorkflowDetailsOnUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

&dataawscctransferserver.DataAwsccTransferServerWorkflowDetailsOnUpload {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTransferServerEndpointDetailsOutputReference <a name="DataAwsccTransferServerEndpointDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferServerEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails">DataAwsccTransferServerEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressAllocationIds`<sup>Required</sup> <a name="AddressAllocationIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```go
func AddressAllocationIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerEndpointDetails">DataAwsccTransferServerEndpointDetails</a>

---


### DataAwsccTransferServerIdentityProviderDetailsOutputReference <a name="DataAwsccTransferServerIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerIdentityProviderDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferServerIdentityProviderDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.invocationRole">InvocationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods">SftpAuthenticationMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails">DataAwsccTransferServerIdentityProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `InvocationRole`<sup>Required</sup> <a name="InvocationRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.invocationRole"></a>

```go
func InvocationRole() *string
```

- *Type:* *string

---

##### `SftpAuthenticationMethods`<sup>Required</sup> <a name="SftpAuthenticationMethods" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods"></a>

```go
func SftpAuthenticationMethods() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerIdentityProviderDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerIdentityProviderDetails">DataAwsccTransferServerIdentityProviderDetails</a>

---


### DataAwsccTransferServerProtocolDetailsOutputReference <a name="DataAwsccTransferServerProtocolDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerProtocolDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferServerProtocolDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.as2Transports">As2Transports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.passiveIp">PassiveIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.setStatOption">SetStatOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">TlsSessionResumptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails">DataAwsccTransferServerProtocolDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `As2Transports`<sup>Required</sup> <a name="As2Transports" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```go
func As2Transports() *[]*string
```

- *Type:* *[]*string

---

##### `PassiveIp`<sup>Required</sup> <a name="PassiveIp" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```go
func PassiveIp() *string
```

- *Type:* *string

---

##### `SetStatOption`<sup>Required</sup> <a name="SetStatOption" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```go
func SetStatOption() *string
```

- *Type:* *string

---

##### `TlsSessionResumptionMode`<sup>Required</sup> <a name="TlsSessionResumptionMode" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```go
func TlsSessionResumptionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerProtocolDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerProtocolDetails">DataAwsccTransferServerProtocolDetails</a>

---


### DataAwsccTransferServerS3StorageOptionsOutputReference <a name="DataAwsccTransferServerS3StorageOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerS3StorageOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferServerS3StorageOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">DirectoryListingOptimization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions">DataAwsccTransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryListingOptimization`<sup>Required</sup> <a name="DirectoryListingOptimization" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```go
func DirectoryListingOptimization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerS3StorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerS3StorageOptions">DataAwsccTransferServerS3StorageOptions</a>

---


### DataAwsccTransferServerTagsList <a name="DataAwsccTransferServerTagsList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTransferServerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccTransferServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTransferServerTagsOutputReference <a name="DataAwsccTransferServerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTransferServerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags">DataAwsccTransferServerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerTags">DataAwsccTransferServerTags</a>

---


### DataAwsccTransferServerWorkflowDetailsOnPartialUploadList <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUploadList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerWorkflowDetailsOnPartialUploadList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTransferServerWorkflowDetailsOnPartialUploadList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get"></a>

```go
func Get(index *f64) DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload">DataAwsccTransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```go
func WorkflowId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerWorkflowDetailsOnPartialUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUpload">DataAwsccTransferServerWorkflowDetailsOnPartialUpload</a>

---


### DataAwsccTransferServerWorkflowDetailsOnUploadList <a name="DataAwsccTransferServerWorkflowDetailsOnUploadList" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerWorkflowDetailsOnUploadList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTransferServerWorkflowDetailsOnUploadList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get"></a>

```go
func Get(index *f64) DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerWorkflowDetailsOnUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload">DataAwsccTransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```go
func WorkflowId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerWorkflowDetailsOnUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUpload">DataAwsccTransferServerWorkflowDetailsOnUpload</a>

---


### DataAwsccTransferServerWorkflowDetailsOutputReference <a name="DataAwsccTransferServerWorkflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferserver"

dataawscctransferserver.NewDataAwsccTransferServerWorkflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferServerWorkflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onPartialUpload">OnPartialUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList">DataAwsccTransferServerWorkflowDetailsOnPartialUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList">DataAwsccTransferServerWorkflowDetailsOnUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails">DataAwsccTransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnPartialUpload`<sup>Required</sup> <a name="OnPartialUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```go
func OnPartialUpload() DataAwsccTransferServerWorkflowDetailsOnPartialUploadList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnPartialUploadList">DataAwsccTransferServerWorkflowDetailsOnPartialUploadList</a>

---

##### `OnUpload`<sup>Required</sup> <a name="OnUpload" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```go
func OnUpload() DataAwsccTransferServerWorkflowDetailsOnUploadList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOnUploadList">DataAwsccTransferServerWorkflowDetailsOnUploadList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferServerWorkflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferServer.DataAwsccTransferServerWorkflowDetails">DataAwsccTransferServerWorkflowDetails</a>

---



