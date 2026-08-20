# `dataAwsccEc2VerifiedAccessEndpoint` Submodule <a name="`dataAwsccEc2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessEndpoint <a name="DataAwsccEc2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint(scope: Construct, id: string, config: DataAwsccEc2VerifiedAccessEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain">applicationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions">cidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain">deviceValidationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn">domainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain">endpointDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix">endpointDomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions">loadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions">networkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled">policyEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions">rdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">verifiedAccessEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId">verifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationDomain`<sup>Required</sup> <a name="applicationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain"></a>

```typescript
public readonly applicationDomain: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `cidrOptions`<sup>Required</sup> <a name="cidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions"></a>

```typescript
public readonly cidrOptions: DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceValidationDomain`<sup>Required</sup> <a name="deviceValidationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```typescript
public readonly deviceValidationDomain: string;
```

- *Type:* string

---

##### `domainCertificateArn`<sup>Required</sup> <a name="domainCertificateArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```typescript
public readonly domainCertificateArn: string;
```

- *Type:* string

---

##### `endpointDomain`<sup>Required</sup> <a name="endpointDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain"></a>

```typescript
public readonly endpointDomain: string;
```

- *Type:* string

---

##### `endpointDomainPrefix`<sup>Required</sup> <a name="endpointDomainPrefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```typescript
public readonly endpointDomainPrefix: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `loadBalancerOptions`<sup>Required</sup> <a name="loadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```typescript
public readonly loadBalancerOptions: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `networkInterfaceOptions`<sup>Required</sup> <a name="networkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```typescript
public readonly networkInterfaceOptions: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyEnabled`<sup>Required</sup> <a name="policyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `rdsOptions`<sup>Required</sup> <a name="rdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions"></a>

```typescript
public readonly rdsOptions: DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2VerifiedAccessEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a>

---

##### `verifiedAccessEndpointId`<sup>Required</sup> <a name="verifiedAccessEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```typescript
public readonly verifiedAccessEndpointId: string;
```

- *Type:* string

---

##### `verifiedAccessGroupId`<sup>Required</sup> <a name="verifiedAccessGroupId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```typescript
public readonly verifiedAccessGroupId: string;
```

- *Type:* string

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptions <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointCidrOptions: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointConfig <a name="DataAwsccEc2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointConfig: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointRdsOptions <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointRdsOptions: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointSseSpecification <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointSseSpecification: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification = { ... }
```


### DataAwsccEc2VerifiedAccessEndpointTags <a name="DataAwsccEc2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VerifiedAccessEndpointTags: dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointCidrOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">rdsDbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">rdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">rdsDbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">rdsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `rdsDbClusterArn`<sup>Required</sup> <a name="rdsDbClusterArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```typescript
public readonly rdsDbClusterArn: string;
```

- *Type:* string

---

##### `rdsDbInstanceArn`<sup>Required</sup> <a name="rdsDbInstanceArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```typescript
public readonly rdsDbInstanceArn: string;
```

- *Type:* string

---

##### `rdsDbProxyArn`<sup>Required</sup> <a name="rdsDbProxyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```typescript
public readonly rdsDbProxyArn: string;
```

- *Type:* string

---

##### `rdsEndpoint`<sup>Required</sup> <a name="rdsEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```typescript
public readonly rdsEndpoint: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointRdsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessEndpointTagsList <a name="DataAwsccEc2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointTagsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VerifiedAccessEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a>

---



