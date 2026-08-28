# `dataAwsccB2BiPartnership` Submodule <a name="`dataAwsccB2BiPartnership` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiPartnership <a name="DataAwsccB2BiPartnership" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_partnership awscc_b2bi_partnership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnership(scope: Construct, id: string, config: DataAwsccB2BiPartnershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig">DataAwsccB2BiPartnershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig">DataAwsccB2BiPartnershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccB2BiPartnership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccB2BiPartnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_partnership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiPartnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions">capabilityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn">partnershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId">partnershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId">tradingPartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `capabilityOptions`<sup>Required</sup> <a name="capabilityOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions"></a>

```typescript
public readonly capabilityOptions: DataAwsccB2BiPartnershipCapabilityOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partnershipArn`<sup>Required</sup> <a name="partnershipArn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn"></a>

```typescript
public readonly partnershipArn: string;
```

- *Type:* string

---

##### `partnershipId`<sup>Required</sup> <a name="partnershipId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId"></a>

```typescript
public readonly partnershipId: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags"></a>

```typescript
public readonly tags: DataAwsccB2BiPartnershipTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a>

---

##### `tradingPartnerId`<sup>Required</sup> <a name="tradingPartnerId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId"></a>

```typescript
public readonly tradingPartnerId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiPartnershipCapabilityOptions <a name="DataAwsccB2BiPartnershipCapabilityOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptions: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsInboundEdi: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders = { ... }
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions = { ... }
```


### DataAwsccB2BiPartnershipConfig <a name="DataAwsccB2BiPartnershipConfig" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipConfig: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_partnership#id DataAwsccB2BiPartnership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiPartnershipTags <a name="DataAwsccB2BiPartnershipTags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

const dataAwsccB2BiPartnershipTags: dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment">functionalAcknowledgment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment">technicalAcknowledgment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionalAcknowledgment`<sup>Required</sup> <a name="functionalAcknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment"></a>

```typescript
public readonly functionalAcknowledgment: string;
```

- *Type:* string

---

##### `technicalAcknowledgment`<sup>Required</sup> <a name="technicalAcknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment"></a>

```typescript
public readonly technicalAcknowledgment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions">acknowledgmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acknowledgmentOptions`<sup>Required</sup> <a name="acknowledgmentOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions"></a>

```typescript
public readonly acknowledgmentOptions: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber">startingFunctionalGroupControlNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber">startingInterchangeControlNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber">startingTransactionSetControlNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startingFunctionalGroupControlNumber`<sup>Required</sup> <a name="startingFunctionalGroupControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber"></a>

```typescript
public readonly startingFunctionalGroupControlNumber: number;
```

- *Type:* number

---

##### `startingInterchangeControlNumber`<sup>Required</sup> <a name="startingInterchangeControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber"></a>

```typescript
public readonly startingInterchangeControlNumber: number;
```

- *Type:* number

---

##### `startingTransactionSetControlNumber`<sup>Required</sup> <a name="startingTransactionSetControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber"></a>

```typescript
public readonly startingTransactionSetControlNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator">componentSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator">dataElementSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator">segmentTerminator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentSeparator`<sup>Required</sup> <a name="componentSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator"></a>

```typescript
public readonly componentSeparator: string;
```

- *Type:* string

---

##### `dataElementSeparator`<sup>Required</sup> <a name="dataElementSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator"></a>

```typescript
public readonly dataElementSeparator: string;
```

- *Type:* string

---

##### `segmentTerminator`<sup>Required</sup> <a name="segmentTerminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator"></a>

```typescript
public readonly segmentTerminator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode">applicationReceiverCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode">applicationSenderCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode">responsibleAgencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationReceiverCode`<sup>Required</sup> <a name="applicationReceiverCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode"></a>

```typescript
public readonly applicationReceiverCode: string;
```

- *Type:* string

---

##### `applicationSenderCode`<sup>Required</sup> <a name="applicationSenderCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode"></a>

```typescript
public readonly applicationSenderCode: string;
```

- *Type:* string

---

##### `responsibleAgencyCode`<sup>Required</sup> <a name="responsibleAgencyCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode"></a>

```typescript
public readonly responsibleAgencyCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode">acknowledgmentRequestedCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId">receiverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier">receiverIdQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator">repetitionSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId">senderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier">senderIdQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode">usageIndicatorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acknowledgmentRequestedCode`<sup>Required</sup> <a name="acknowledgmentRequestedCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode"></a>

```typescript
public readonly acknowledgmentRequestedCode: string;
```

- *Type:* string

---

##### `receiverId`<sup>Required</sup> <a name="receiverId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId"></a>

```typescript
public readonly receiverId: string;
```

- *Type:* string

---

##### `receiverIdQualifier`<sup>Required</sup> <a name="receiverIdQualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier"></a>

```typescript
public readonly receiverIdQualifier: string;
```

- *Type:* string

---

##### `repetitionSeparator`<sup>Required</sup> <a name="repetitionSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator"></a>

```typescript
public readonly repetitionSeparator: string;
```

- *Type:* string

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

---

##### `senderIdQualifier`<sup>Required</sup> <a name="senderIdQualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier"></a>

```typescript
public readonly senderIdQualifier: string;
```

- *Type:* string

---

##### `usageIndicatorCode`<sup>Required</sup> <a name="usageIndicatorCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode"></a>

```typescript
public readonly usageIndicatorCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers">controlNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters">delimiters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders">functionalGroupHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat">gs05TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders">interchangeControlHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi">validateEdi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlNumbers`<sup>Required</sup> <a name="controlNumbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers"></a>

```typescript
public readonly controlNumbers: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a>

---

##### `delimiters`<sup>Required</sup> <a name="delimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters"></a>

```typescript
public readonly delimiters: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a>

---

##### `functionalGroupHeaders`<sup>Required</sup> <a name="functionalGroupHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders"></a>

```typescript
public readonly functionalGroupHeaders: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a>

---

##### `gs05TimeFormat`<sup>Required</sup> <a name="gs05TimeFormat" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat"></a>

```typescript
public readonly gs05TimeFormat: string;
```

- *Type:* string

---

##### `interchangeControlHeaders`<sup>Required</sup> <a name="interchangeControlHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders"></a>

```typescript
public readonly interchangeControlHeaders: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a>

---

##### `validateEdi`<sup>Required</sup> <a name="validateEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi"></a>

```typescript
public readonly validateEdi: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common">common</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions">wrapOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common"></a>

```typescript
public readonly common: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a>

---

##### `wrapOptions`<sup>Required</sup> <a name="wrapOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions"></a>

```typescript
public readonly wrapOptions: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength">lineLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator">lineTerminator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy">wrapBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lineLength`<sup>Required</sup> <a name="lineLength" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength"></a>

```typescript
public readonly lineLength: number;
```

- *Type:* number

---

##### `lineTerminator`<sup>Required</sup> <a name="lineTerminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator"></a>

```typescript
public readonly lineTerminator: string;
```

- *Type:* string

---

##### `wrapBy`<sup>Required</sup> <a name="wrapBy" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy"></a>

```typescript
public readonly wrapBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi">inboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi">outboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundEdi`<sup>Required</sup> <a name="inboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi"></a>

```typescript
public readonly inboundEdi: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a>

---

##### `outboundEdi`<sup>Required</sup> <a name="outboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi"></a>

```typescript
public readonly outboundEdi: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipCapabilityOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a>

---


### DataAwsccB2BiPartnershipTagsList <a name="DataAwsccB2BiPartnershipTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get"></a>

```typescript
public get(index: number): DataAwsccB2BiPartnershipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccB2BiPartnershipTagsOutputReference <a name="DataAwsccB2BiPartnershipTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiPartnership } from '@cdktn/provider-awscc'

new dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiPartnershipTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a>

---



