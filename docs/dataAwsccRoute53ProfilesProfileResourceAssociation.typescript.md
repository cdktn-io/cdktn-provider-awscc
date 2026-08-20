# `dataAwsccRoute53ProfilesProfileResourceAssociation` Submodule <a name="`dataAwsccRoute53ProfilesProfileResourceAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ProfilesProfileResourceAssociation <a name="DataAwsccRoute53ProfilesProfileResourceAssociation" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

new dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation(scope: Construct, id: string, config: DataAwsccRoute53ProfilesProfileResourceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig">DataAwsccRoute53ProfilesProfileResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig">DataAwsccRoute53ProfilesProfileResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isConstruct"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53ProfilesProfileResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53ProfilesProfileResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53profiles_profile_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ProfilesProfileResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.profileResourceAssociationId">profileResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceProperties">resourceProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `profileResourceAssociationId`<sup>Required</sup> <a name="profileResourceAssociationId" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.profileResourceAssociationId"></a>

```typescript
public readonly profileResourceAssociationId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceProperties"></a>

```typescript
public readonly resourceProperties: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ProfilesProfileResourceAssociationConfig <a name="DataAwsccRoute53ProfilesProfileResourceAssociationConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

const dataAwsccRoute53ProfilesProfileResourceAssociationConfig: dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ProfilesProfileResourceAssociation.DataAwsccRoute53ProfilesProfileResourceAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53profiles_profile_resource_association#id DataAwsccRoute53ProfilesProfileResourceAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



