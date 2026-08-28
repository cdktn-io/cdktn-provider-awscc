# `dataAwsccServicediscoveryPublicDnsNamespace` Submodule <a name="`dataAwsccServicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicediscoveryPublicDnsNamespace <a name="DataAwsccServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespace(scope Construct, id *string, config DataAwsccServicediscoveryPublicDnsNamespaceConfig) DataAwsccServicediscoveryPublicDnsNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccServicediscoveryPublicDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">PublicDnsNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties"></a>

```go
func Properties() DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `PublicDnsNamespaceId`<sup>Required</sup> <a name="PublicDnsNamespaceId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```go
func PublicDnsNamespaceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags"></a>

```go
func Tags() DataAwsccServicediscoveryPublicDnsNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicediscoveryPublicDnsNamespaceConfig <a name="DataAwsccServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

&dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace#id DataAwsccServicediscoveryPublicDnsNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicediscoveryPublicDnsNamespaceProperties <a name="DataAwsccServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

&dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties {

}
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

&dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties {

}
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

&dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa {

}
```


### DataAwsccServicediscoveryPublicDnsNamespaceTags <a name="DataAwsccServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

&dataawsccservicediscoverypublicdnsnamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```go
func Soa() DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsProperties`<sup>Required</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```go
func DnsProperties() DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPublicDnsNamespaceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsList <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccServicediscoveryPublicDnsNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicediscoverypublicdnsnamespace"

dataawsccservicediscoverypublicdnsnamespace.NewDataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccServicediscoveryPublicDnsNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a>

---



