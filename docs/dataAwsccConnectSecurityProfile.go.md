# `dataAwsccConnectSecurityProfile` Submodule <a name="`dataAwsccConnectSecurityProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectSecurityProfile <a name="DataAwsccConnectSecurityProfile" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile awscc_connect_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfile(scope Construct, id *string, config DataAwsccConnectSecurityProfileConfig) DataAwsccConnectSecurityProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig">DataAwsccConnectSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig">DataAwsccConnectSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConnectSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConnectSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConnectSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId">AllowedAccessControlHierarchyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlTags">AllowedAccessControlTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList">DataAwsccConnectSecurityProfileAllowedAccessControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedFlowModules">AllowedFlowModules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList">DataAwsccConnectSecurityProfileAllowedFlowModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList">DataAwsccConnectSecurityProfileApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.granularAccessControlConfiguration">GranularAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.hierarchyRestrictedResources">HierarchyRestrictedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileArn">SecurityProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tagRestrictedResources">TagRestrictedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList">DataAwsccConnectSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllowedAccessControlHierarchyGroupId`<sup>Required</sup> <a name="AllowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId"></a>

```go
func AllowedAccessControlHierarchyGroupId() *string
```

- *Type:* *string

---

##### `AllowedAccessControlTags`<sup>Required</sup> <a name="AllowedAccessControlTags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlTags"></a>

```go
func AllowedAccessControlTags() DataAwsccConnectSecurityProfileAllowedAccessControlTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList">DataAwsccConnectSecurityProfileAllowedAccessControlTagsList</a>

---

##### `AllowedFlowModules`<sup>Required</sup> <a name="AllowedFlowModules" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedFlowModules"></a>

```go
func AllowedFlowModules() DataAwsccConnectSecurityProfileAllowedFlowModulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList">DataAwsccConnectSecurityProfileAllowedFlowModulesList</a>

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.applications"></a>

```go
func Applications() DataAwsccConnectSecurityProfileApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList">DataAwsccConnectSecurityProfileApplicationsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GranularAccessControlConfiguration`<sup>Required</sup> <a name="GranularAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.granularAccessControlConfiguration"></a>

```go
func GranularAccessControlConfiguration() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a>

---

##### `HierarchyRestrictedResources`<sup>Required</sup> <a name="HierarchyRestrictedResources" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.hierarchyRestrictedResources"></a>

```go
func HierarchyRestrictedResources() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedRegion"></a>

```go
func LastModifiedRegion() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityProfileArn`<sup>Required</sup> <a name="SecurityProfileArn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileArn"></a>

```go
func SecurityProfileArn() *string
```

- *Type:* *string

---

##### `SecurityProfileName`<sup>Required</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileName"></a>

```go
func SecurityProfileName() *string
```

- *Type:* *string

---

##### `TagRestrictedResources`<sup>Required</sup> <a name="TagRestrictedResources" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tagRestrictedResources"></a>

```go
func TagRestrictedResources() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tags"></a>

```go
func Tags() DataAwsccConnectSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList">DataAwsccConnectSecurityProfileTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectSecurityProfileAllowedAccessControlTags <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileAllowedAccessControlTags {

}
```


### DataAwsccConnectSecurityProfileAllowedFlowModules <a name="DataAwsccConnectSecurityProfileAllowedFlowModules" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileAllowedFlowModules {

}
```


### DataAwsccConnectSecurityProfileApplications <a name="DataAwsccConnectSecurityProfileApplications" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileApplications {

}
```


### DataAwsccConnectSecurityProfileConfig <a name="DataAwsccConnectSecurityProfileConfig" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile#id DataAwsccConnectSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectSecurityProfileGranularAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration {

}
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration {

}
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration {

}
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues {

}
```


### DataAwsccConnectSecurityProfileTags <a name="DataAwsccConnectSecurityProfileTags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

&dataawsccconnectsecurityprofile.DataAwsccConnectSecurityProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectSecurityProfileAllowedAccessControlTagsList <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTagsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileAllowedAccessControlTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectSecurityProfileAllowedAccessControlTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags">DataAwsccConnectSecurityProfileAllowedAccessControlTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileAllowedAccessControlTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags">DataAwsccConnectSecurityProfileAllowedAccessControlTags</a>

---


### DataAwsccConnectSecurityProfileAllowedFlowModulesList <a name="DataAwsccConnectSecurityProfileAllowedFlowModulesList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileAllowedFlowModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectSecurityProfileAllowedFlowModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get"></a>

```go
func Get(index *f64) DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference <a name="DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId">FlowModuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules">DataAwsccConnectSecurityProfileAllowedFlowModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowModuleId`<sup>Required</sup> <a name="FlowModuleId" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId"></a>

```go
func FlowModuleId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileAllowedFlowModules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules">DataAwsccConnectSecurityProfileAllowedFlowModules</a>

---


### DataAwsccConnectSecurityProfileApplicationsList <a name="DataAwsccConnectSecurityProfileApplicationsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileApplicationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectSecurityProfileApplicationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectSecurityProfileApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectSecurityProfileApplicationsOutputReference <a name="DataAwsccConnectSecurityProfileApplicationsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectSecurityProfileApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions">ApplicationPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications">DataAwsccConnectSecurityProfileApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationPermissions`<sup>Required</sup> <a name="ApplicationPermissions" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions"></a>

```go
func ApplicationPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileApplications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications">DataAwsccConnectSecurityProfileApplications</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration">PrimaryAttributeAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryAttributeAccessControlConfiguration`<sup>Required</sup> <a name="PrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration"></a>

```go
func PrimaryAttributeAccessControlConfiguration() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues">PrimaryAttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryAttributeValues`<sup>Required</sup> <a name="PrimaryAttributeValues" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues"></a>

```go
func PrimaryAttributeValues() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get"></a>

```go
func Get(index *f64) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration">DataTableAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTableAccessControlConfiguration`<sup>Required</sup> <a name="DataTableAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration"></a>

```go
func DataTableAccessControlConfiguration() DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileTagsList <a name="DataAwsccConnectSecurityProfileTagsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectSecurityProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectSecurityProfileTagsOutputReference <a name="DataAwsccConnectSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectsecurityprofile"

dataawsccconnectsecurityprofile.NewDataAwsccConnectSecurityProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectSecurityProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags">DataAwsccConnectSecurityProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectSecurityProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags">DataAwsccConnectSecurityProfileTags</a>

---



