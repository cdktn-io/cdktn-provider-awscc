# `dataAwsccEc2VerifiedAccessInstance` Submodule <a name="`dataAwsccEc2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessInstance <a name="DataAwsccEc2VerifiedAccessInstance" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance(scope: Construct, id: string, config: DataAwsccEc2VerifiedAccessInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig">DataAwsccEc2VerifiedAccessInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig">DataAwsccEc2VerifiedAccessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">cidrEndpointsCustomSubDomainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList">DataAwsccEc2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cidrEndpointsCustomSubDomain`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```typescript
public readonly cidrEndpointsCustomSubDomain: string;
```

- *Type:* string

---

##### `cidrEndpointsCustomSubDomainNameServers`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomainNameServers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```typescript
public readonly cidrEndpointsCustomSubDomainNameServers: string[];
```

- *Type:* string[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `loggingConfigurations`<sup>Required</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.loggingConfigurations"></a>

```typescript
public readonly loggingConfigurations: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2VerifiedAccessInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList">DataAwsccEc2VerifiedAccessInstanceTagsList</a>

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

---

##### `verifiedAccessTrustProviderIds`<sup>Required</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```typescript
public readonly verifiedAccessTrustProviderIds: string[];
```

- *Type:* string[]

---

##### `verifiedAccessTrustProviders`<sup>Required</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```typescript
public readonly verifiedAccessTrustProviders: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessInstanceConfig <a name="DataAwsccEc2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceConfig: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_instance#id DataAwsccEc2VerifiedAccessInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceLoggingConfigurations: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations = { ... }
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs = { ... }
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose = { ... }
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 = { ... }
```


### DataAwsccEc2VerifiedAccessInstanceTags <a name="DataAwsccEc2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceTags: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags = { ... }
```


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders: dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">includeTrustContext</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">kinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">logVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `includeTrustContext`<sup>Required</sup> <a name="includeTrustContext" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kinesisDataFirehose`<sup>Required</sup> <a name="kinesisDataFirehose" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```typescript
public readonly kinesisDataFirehose: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `logVersion`<sup>Required</sup> <a name="logVersion" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```typescript
public readonly logVersion: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### DataAwsccEc2VerifiedAccessInstanceTagsList <a name="DataAwsccEc2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessInstanceTagsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags">DataAwsccEc2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags">DataAwsccEc2VerifiedAccessInstanceTags</a>

---


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

---

##### `verifiedAccessTrustProviderId`<sup>Required</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```typescript
public readonly verifiedAccessTrustProviderId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



