# `dataAwsccNetworksecuritymanagerPolicy` Submodule <a name="`dataAwsccNetworksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworksecuritymanagerPolicy <a name="DataAwsccNetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicy(scope Construct, id *string, config DataAwsccNetworksecuritymanagerPolicyConfig) DataAwsccNetworksecuritymanagerPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig">DataAwsccNetworksecuritymanagerPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig">DataAwsccNetworksecuritymanagerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworksecuritymanagerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">AssociatedTemplateAndRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyConfiguration">PolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList">DataAwsccNetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssociatedTemplateAndRuleList`<sup>Required</sup> <a name="AssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```go
func AssociatedTemplateAndRuleList() DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `PolicyConfiguration`<sup>Required</sup> <a name="PolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```go
func PolicyConfiguration() DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyDescription"></a>

```go
func PolicyDescription() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.tags"></a>

```go
func Tags() DataAwsccNetworksecuritymanagerPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList">DataAwsccNetworksecuritymanagerPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

&dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct {

}
```


### DataAwsccNetworksecuritymanagerPolicyConfig <a name="DataAwsccNetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

&dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_policy#id DataAwsccNetworksecuritymanagerPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration <a name="DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

&dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration {

}
```


### DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

&dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig {

}
```


### DataAwsccNetworksecuritymanagerPolicyTags <a name="DataAwsccNetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

&dataawsccnetworksecuritymanagerpolicy.DataAwsccNetworksecuritymanagerPolicyTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```go
func Get(index *f64) DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">TemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```go
func TemplateArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">DataAwsccNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>

---


### DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">RemediationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration">DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```go
func RemediationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResourcesCleanUp`<sup>Required</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```go
func ResourcesCleanUp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```go
func WafConfig() DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration">DataAwsccNetworksecuritymanagerPolicyPolicyConfiguration</a>

---


### DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```go
func ConflictResolution() *string
```

- *Type:* *string

---

##### `ExistingCustomerWebAclResolution`<sup>Required</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```go
func ExistingCustomerWebAclResolution() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig">DataAwsccNetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---


### DataAwsccNetworksecuritymanagerPolicyTagsList <a name="DataAwsccNetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworksecuritymanagerPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworksecuritymanagerPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworksecuritymanagerPolicyTagsOutputReference <a name="DataAwsccNetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworksecuritymanagerpolicy"

dataawsccnetworksecuritymanagerpolicy.NewDataAwsccNetworksecuritymanagerPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworksecuritymanagerPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTags">DataAwsccNetworksecuritymanagerPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworksecuritymanagerPolicyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerPolicy.DataAwsccNetworksecuritymanagerPolicyTags">DataAwsccNetworksecuritymanagerPolicyTags</a>

---



