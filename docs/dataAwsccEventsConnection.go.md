# `dataAwsccEventsConnection` Submodule <a name="`dataAwsccEventsConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsConnection <a name="DataAwsccEventsConnection" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnection(scope Construct, id *string, config DataAwsccEventsConnectionConfig) DataAwsccEventsConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig">DataAwsccEventsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig">DataAwsccEventsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.DataAwsccEventsConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.DataAwsccEventsConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.DataAwsccEventsConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.DataAwsccEventsConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEventsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEventsConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arnForPolicy">ArnForPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.invocationConnectivityParameters">InvocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArnForPolicy`<sup>Required</sup> <a name="ArnForPolicy" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arnForPolicy"></a>

```go
func ArnForPolicy() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `AuthParameters`<sup>Required</sup> <a name="AuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authParameters"></a>

```go
func AuthParameters() DataAwsccEventsConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InvocationConnectivityParameters`<sup>Required</sup> <a name="InvocationConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.invocationConnectivityParameters"></a>

```go
func InvocationConnectivityParameters() DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsConnectionAuthParameters <a name="DataAwsccEventsConnectionAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParameters {

}
```


### DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters <a name="DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters {

}
```


### DataAwsccEventsConnectionAuthParametersBasicAuthParameters <a name="DataAwsccEventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters {

}
```


### DataAwsccEventsConnectionAuthParametersConnectivityParameters <a name="DataAwsccEventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters {

}
```


### DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters {

}
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters {

}
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters {

}
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters {

}
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters {

}
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters {

}
```


### DataAwsccEventsConnectionConfig <a name="DataAwsccEventsConnectionConfig" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/events_connection#id DataAwsccEventsConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsConnectionInvocationConnectivityParameters <a name="DataAwsccEventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionInvocationConnectivityParameters {

}
```


### DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters <a name="DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

&dataawscceventsconnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">ApiKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">ApiKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters">DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyName`<sup>Required</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```go
func ApiKeyName() *string
```

- *Type:* *string

---

##### `ApiKeyValue`<sup>Required</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```go
func ApiKeyValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters">DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters">DataAwsccEventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters">DataAwsccEventsConnectionAuthParametersBasicAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters">DataAwsccEventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```go
func ResourceParameters() DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters">DataAwsccEventsConnectionAuthParametersConnectivityParameters</a>

---


### DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```go
func ResourceAssociationArn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```go
func ResourceConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```go
func BodyParameters() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```go
func BodyParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">OAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters">DataAwsccEventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientParameters`<sup>Required</sup> <a name="ClientParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```go
func ClientParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `OAuthHttpParameters`<sup>Required</sup> <a name="OAuthHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```go
func OAuthHttpParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParametersOAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters">DataAwsccEventsConnectionAuthParametersOAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">ApiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.basicAuthParameters">BasicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.connectivityParameters">ConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.oAuthParameters">OAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters">DataAwsccEventsConnectionAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyAuthParameters`<sup>Required</sup> <a name="ApiKeyAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```go
func ApiKeyAuthParameters() DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `BasicAuthParameters`<sup>Required</sup> <a name="BasicAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```go
func BasicAuthParameters() DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `ConnectivityParameters`<sup>Required</sup> <a name="ConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```go
func ConnectivityParameters() DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `InvocationHttpParameters`<sup>Required</sup> <a name="InvocationHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```go
func InvocationHttpParameters() DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `OAuthParameters`<sup>Required</sup> <a name="OAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```go
func OAuthParameters() DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters">DataAwsccEventsConnectionAuthParameters</a>

---


### DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference <a name="DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionInvocationConnectivityParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters">DataAwsccEventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```go
func ResourceParameters() DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionInvocationConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters">DataAwsccEventsConnectionInvocationConnectivityParameters</a>

---


### DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsconnection"

dataawscceventsconnection.NewDataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```go
func ResourceAssociationArn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```go
func ResourceConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters</a>

---



