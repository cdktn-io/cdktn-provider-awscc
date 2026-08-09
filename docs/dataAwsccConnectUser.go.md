# `dataAwsccConnectUser` Submodule <a name="`dataAwsccConnectUser` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectUser <a name="DataAwsccConnectUser" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUser(scope Construct, id *string, config DataAwsccConnectUserConfig) DataAwsccConnectUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig">DataAwsccConnectUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig">DataAwsccConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.DataAwsccConnectUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.DataAwsccConnectUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.DataAwsccConnectUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.DataAwsccConnectUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConnectUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs">AfterContactWorkConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs">AutoAcceptConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId">DirectoryUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn">HierarchyGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo">IdentityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs">PersistentConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig">PhoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs">PhoneNumberConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn">RoutingProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns">SecurityProfileArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn">UserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies">UserProficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs">VoiceEnhancementConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AfterContactWorkConfigs`<sup>Required</sup> <a name="AfterContactWorkConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs"></a>

```go
func AfterContactWorkConfigs() DataAwsccConnectUserAfterContactWorkConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a>

---

##### `AutoAcceptConfigs`<sup>Required</sup> <a name="AutoAcceptConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs"></a>

```go
func AutoAcceptConfigs() DataAwsccConnectUserAutoAcceptConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a>

---

##### `DirectoryUserId`<sup>Required</sup> <a name="DirectoryUserId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId"></a>

```go
func DirectoryUserId() *string
```

- *Type:* *string

---

##### `HierarchyGroupArn`<sup>Required</sup> <a name="HierarchyGroupArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn"></a>

```go
func HierarchyGroupArn() *string
```

- *Type:* *string

---

##### `IdentityInfo`<sup>Required</sup> <a name="IdentityInfo" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo"></a>

```go
func IdentityInfo() DataAwsccConnectUserIdentityInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PersistentConnectionConfigs`<sup>Required</sup> <a name="PersistentConnectionConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs"></a>

```go
func PersistentConnectionConfigs() DataAwsccConnectUserPersistentConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a>

---

##### `PhoneConfig`<sup>Required</sup> <a name="PhoneConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig"></a>

```go
func PhoneConfig() DataAwsccConnectUserPhoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a>

---

##### `PhoneNumberConfigs`<sup>Required</sup> <a name="PhoneNumberConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs"></a>

```go
func PhoneNumberConfigs() DataAwsccConnectUserPhoneNumberConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a>

---

##### `RoutingProfileArn`<sup>Required</sup> <a name="RoutingProfileArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn"></a>

```go
func RoutingProfileArn() *string
```

- *Type:* *string

---

##### `SecurityProfileArns`<sup>Required</sup> <a name="SecurityProfileArns" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns"></a>

```go
func SecurityProfileArns() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags"></a>

```go
func Tags() DataAwsccConnectUserTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a>

---

##### `UserArn`<sup>Required</sup> <a name="UserArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn"></a>

```go
func UserArn() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserProficiencies`<sup>Required</sup> <a name="UserProficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies"></a>

```go
func UserProficiencies() DataAwsccConnectUserUserProficienciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a>

---

##### `VoiceEnhancementConfigs`<sup>Required</sup> <a name="VoiceEnhancementConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs"></a>

```go
func VoiceEnhancementConfigs() DataAwsccConnectUserVoiceEnhancementConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectUserAfterContactWorkConfigs <a name="DataAwsccConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserAfterContactWorkConfigs {

}
```


### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig {

}
```


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig {

}
```


### DataAwsccConnectUserAutoAcceptConfigs <a name="DataAwsccConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserAutoAcceptConfigs {

}
```


### DataAwsccConnectUserConfig <a name="DataAwsccConnectUserConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user#id DataAwsccConnectUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectUserIdentityInfo <a name="DataAwsccConnectUserIdentityInfo" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserIdentityInfo {

}
```


### DataAwsccConnectUserPersistentConnectionConfigs <a name="DataAwsccConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserPersistentConnectionConfigs {

}
```


### DataAwsccConnectUserPhoneConfig <a name="DataAwsccConnectUserPhoneConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserPhoneConfig {

}
```


### DataAwsccConnectUserPhoneNumberConfigs <a name="DataAwsccConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserPhoneNumberConfigs {

}
```


### DataAwsccConnectUserTags <a name="DataAwsccConnectUserTags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserTags {

}
```


### DataAwsccConnectUserUserProficiencies <a name="DataAwsccConnectUserUserProficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserUserProficiencies {

}
```


### DataAwsccConnectUserVoiceEnhancementConfigs <a name="DataAwsccConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

&dataawsccconnectuser.DataAwsccConnectUserVoiceEnhancementConfigs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterContactWorkMode`<sup>Required</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```go
func AfterContactWorkMode() *string
```

- *Type:* *string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```go
func AfterContactWorkTimeLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterContactWorkMode`<sup>Required</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```go
func AfterContactWorkMode() *string
```

- *Type:* *string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```go
func AfterContactWorkTimeLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsList <a name="DataAwsccConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAfterContactWorkConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserAfterContactWorkConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserAfterContactWorkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserAfterContactWorkConfigsOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAfterContactWorkConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserAfterContactWorkConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">AfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">AgentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterContactWorkConfig`<sup>Required</sup> <a name="AfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```go
func AfterContactWorkConfig() DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `AgentFirstCallbackAfterContactWorkConfig`<sup>Required</sup> <a name="AgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```go
func AgentFirstCallbackAfterContactWorkConfig() DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserAfterContactWorkConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a>

---


### DataAwsccConnectUserAutoAcceptConfigsList <a name="DataAwsccConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAutoAcceptConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserAutoAcceptConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserAutoAcceptConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserAutoAcceptConfigsOutputReference <a name="DataAwsccConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserAutoAcceptConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserAutoAcceptConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">AgentFirstCallbackAutoAccept</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">AutoAccept</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentFirstCallbackAutoAccept`<sup>Required</sup> <a name="AgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```go
func AgentFirstCallbackAutoAccept() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```go
func AutoAccept() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserAutoAcceptConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a>

---


### DataAwsccConnectUserIdentityInfoOutputReference <a name="DataAwsccConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserIdentityInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserIdentityInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile">Mobile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail">SecondaryEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Mobile`<sup>Required</sup> <a name="Mobile" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile"></a>

```go
func Mobile() *string
```

- *Type:* *string

---

##### `SecondaryEmail`<sup>Required</sup> <a name="SecondaryEmail" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```go
func SecondaryEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a>

---


### DataAwsccConnectUserPersistentConnectionConfigsList <a name="DataAwsccConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserPersistentConnectionConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserPersistentConnectionConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserPersistentConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserPersistentConnectionConfigsOutputReference <a name="DataAwsccConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserPersistentConnectionConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserPersistentConnectionConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">PersistentConnection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `PersistentConnection`<sup>Required</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```go
func PersistentConnection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserPersistentConnectionConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a>

---


### DataAwsccConnectUserPhoneConfigOutputReference <a name="DataAwsccConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserPhoneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserPhoneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept">AutoAccept</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">DeskPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection">PersistentConnection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType">PhoneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```go
func AfterContactWorkTimeLimit() *f64
```

- *Type:* *f64

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```go
func AutoAccept() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeskPhoneNumber`<sup>Required</sup> <a name="DeskPhoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```go
func DeskPhoneNumber() *string
```

- *Type:* *string

---

##### `PersistentConnection`<sup>Required</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```go
func PersistentConnection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```go
func PhoneType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a>

---


### DataAwsccConnectUserPhoneNumberConfigsList <a name="DataAwsccConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserPhoneNumberConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserPhoneNumberConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserPhoneNumberConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserPhoneNumberConfigsOutputReference <a name="DataAwsccConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserPhoneNumberConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserPhoneNumberConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType">PhoneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```go
func PhoneType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserPhoneNumberConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a>

---


### DataAwsccConnectUserTagsList <a name="DataAwsccConnectUserTagsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserTagsOutputReference <a name="DataAwsccConnectUserTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a>

---


### DataAwsccConnectUserUserProficienciesList <a name="DataAwsccConnectUserUserProficienciesList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserUserProficienciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserUserProficienciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserUserProficienciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserUserProficienciesOutputReference <a name="DataAwsccConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserUserProficienciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserUserProficienciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserUserProficiencies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a>

---


### DataAwsccConnectUserVoiceEnhancementConfigsList <a name="DataAwsccConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserVoiceEnhancementConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectUserVoiceEnhancementConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectUserVoiceEnhancementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectUserVoiceEnhancementConfigsOutputReference <a name="DataAwsccConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuser"

dataawsccconnectuser.NewDataAwsccConnectUserVoiceEnhancementConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectUserVoiceEnhancementConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">VoiceEnhancementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `VoiceEnhancementMode`<sup>Required</sup> <a name="VoiceEnhancementMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```go
func VoiceEnhancementMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserVoiceEnhancementConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a>

---



