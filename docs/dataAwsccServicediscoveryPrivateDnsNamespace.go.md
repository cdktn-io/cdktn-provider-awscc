# `dataAwsccServicediscoveryPrivateDnsNamespace` Submodule <a name="`dataAwsccServicediscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicediscoveryPrivateDnsNamespace <a name="DataAwsccServicediscoveryPrivateDnsNamespace" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespace(scope Construct, id *string, config DataAwsccServicediscoveryPrivateDnsNamespaceConfig) DataAwsccServicediscoveryPrivateDnsNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig">DataAwsccServicediscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig">DataAwsccServicediscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccServicediscoveryPrivateDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccServicediscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicediscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId">PrivateDnsNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList">DataAwsccServicediscoveryPrivateDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsNamespaceId`<sup>Required</sup> <a name="PrivateDnsNamespaceId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId"></a>

```go
func PrivateDnsNamespaceId() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.properties"></a>

```go
func Properties() DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tags"></a>

```go
func Tags() DataAwsccServicediscoveryPrivateDnsNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList">DataAwsccServicediscoveryPrivateDnsNamespaceTagsList</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicediscoveryPrivateDnsNamespaceConfig <a name="DataAwsccServicediscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

&dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/servicediscovery_private_dns_namespace#id DataAwsccServicediscoveryPrivateDnsNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicediscoveryPrivateDnsNamespaceProperties <a name="DataAwsccServicediscoveryPrivateDnsNamespaceProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

&dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties {

}
```


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

&dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties {

}
```


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

&dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa {

}
```


### DataAwsccServicediscoveryPrivateDnsNamespaceTags <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

&dataawsccservicediscoveryprivatednsnamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```go
func Soa() DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties">DataAwsccServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsProperties`<sup>Required</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```go
func DnsProperties() DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPrivateDnsNamespaceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties">DataAwsccServicediscoveryPrivateDnsNamespaceProperties</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespaceTagsList <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccServicediscoveryPrivateDnsNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoveryprivatednsnamespace"

dataawsccservicediscoveryprivatednsnamespace.NewDataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags">DataAwsccServicediscoveryPrivateDnsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPrivateDnsNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags">DataAwsccServicediscoveryPrivateDnsNamespaceTags</a>

---



