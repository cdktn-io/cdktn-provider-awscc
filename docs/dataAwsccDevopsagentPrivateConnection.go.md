# `dataAwsccDevopsagentPrivateConnection` Submodule <a name="`dataAwsccDevopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentPrivateConnection <a name="DataAwsccDevopsagentPrivateConnection" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnection(scope Construct, id *string, config DataAwsccDevopsagentPrivateConnectionConfig) DataAwsccDevopsagentPrivateConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig">DataAwsccDevopsagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig">DataAwsccDevopsagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDevopsagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.certificateExpiryTime">CertificateExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList">DataAwsccDevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificateExpiryTime`<sup>Required</sup> <a name="CertificateExpiryTime" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```go
func CertificateExpiryTime() *string
```

- *Type:* *string

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.connectionConfiguration"></a>

```go
func ConnectionConfiguration() DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.tags"></a>

```go
func Tags() DataAwsccDevopsagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList">DataAwsccDevopsagentPrivateConnectionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentPrivateConnectionConfig <a name="DataAwsccDevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

&dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_private_connection#id DataAwsccDevopsagentPrivateConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentPrivateConnectionConnectionConfiguration <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

&dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnectionConnectionConfiguration {

}
```


### DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

&dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged {

}
```


### DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

&dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged {

}
```


### DataAwsccDevopsagentPrivateConnectionTags <a name="DataAwsccDevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

&dataawsccdevopsagentprivateconnection.DataAwsccDevopsagentPrivateConnectionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfiguration">DataAwsccDevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```go
func SelfManaged() DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `ServiceManaged`<sup>Required</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```go
func ServiceManaged() DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentPrivateConnectionConnectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfiguration">DataAwsccDevopsagentPrivateConnectionConnectionConfiguration</a>

---


### DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---


### DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">HostAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```go
func DnsResolution() *string
```

- *Type:* *string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```go
func HostAddress() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```go
func Ipv4AddressesPerEni() *f64
```

- *Type:* *f64

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DataAwsccDevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---


### DataAwsccDevopsagentPrivateConnectionTagsList <a name="DataAwsccDevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentPrivateConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentPrivateConnectionTagsOutputReference <a name="DataAwsccDevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentprivateconnection"

dataawsccdevopsagentprivateconnection.NewDataAwsccDevopsagentPrivateConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentPrivateConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTags">DataAwsccDevopsagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentPrivateConnectionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentPrivateConnection.DataAwsccDevopsagentPrivateConnectionTags">DataAwsccDevopsagentPrivateConnectionTags</a>

---



